import React, { useState, useEffect, useCallback, memo, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LandingPage.css';
import FundraisingFooter from './FundraisingFooter';
import { useStravaActivities } from './hooks/useStravaActivities';

const LandingPage = memo(function LandingPage() {
  const { activities: stravaActivities } = useStravaActivities();
  const [totalDistance, setTotalDistance] = useState({ running: 0, cycling: 0, total: 0 });
  const navigate = useNavigate();

  const calculateTotalDistance = (activities) => {
    let runningTotal = 0;
    let cyclingTotal = 0;
    let runCount = 0;
    let rideCount = 0;

    console.log('=== DISTANCE CALCULATION DEBUG ===');
    console.log('Total activities to process:', activities.length);

    activities.forEach((activity, index) => {
      // Use the same distance field logic as RecentActivities.js
      const distance = activity.distance_km || (activity.distance / 1000);
      
      if (activity.type === 'Run' && distance) {
        runningTotal += distance;
        runCount++;
        console.log(`Run ${runCount}: ${activity.name} - ${distance}km (${activity.date})`);
      } else if (activity.type === 'Ride' && distance) {
        cyclingTotal += distance;
        rideCount++;
        console.log(`Ride ${rideCount}: ${activity.name} - ${distance}km (${activity.date})`);
      }
    });

    console.log('Running total:', runningTotal, 'km from', runCount, 'runs');
    console.log('Cycling total:', cyclingTotal, 'km from', rideCount, 'rides');
    console.log('Grand total:', runningTotal + cyclingTotal, 'km');
    console.log('=== END DISTANCE CALCULATION DEBUG ===');

    setTotalDistance({
      running: runningTotal,
      cycling: cyclingTotal,
      total: runningTotal + cyclingTotal
    });
  };

  // Calculate total distance when activities change
  useEffect(() => {
    if (stravaActivities.length > 0) {
      calculateTotalDistance(stravaActivities);
    }
  }, [stravaActivities]);

  const formatDistance = (distance) => {
    return distance.toFixed(1);
  };

  const formatActivityTitle = (activity) => {
    const distance = activity.distance_km ? activity.distance_km.toFixed(1) : '0.0';
    return `${activity.name} - ${distance} km`;
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'Run': return '🏃‍♂️';
      case 'Ride':
      case 'VirtualRide': return '🚴‍♂️';
      default: return '🏃‍♂️';
    }
  };

  const getActivityTime = (activity) => {
    const now = new Date();
    // Try different date fields that might exist
    const dateString = activity.start_time || activity.date || activity.start_date;
    
    // console.log('=== DATE PARSING DEBUG ===');
    // console.log('Activity:', activity.name);
    // console.log('Available date fields:', {
    //   start_time: activity.start_time,
    //   date: activity.date,
    //   start_date: activity.start_date
    // });
    // console.log('Selected dateString:', dateString);
    
    if (!dateString) {
      // console.warn('No date found for activity:', activity);
      return 'Unknown date';
    }
    
    // Try to parse the date string
    let activityDate;
    
    // Handle different date formats
    if (dateString.includes('th of') || dateString.includes('st of') || dateString.includes('nd of') || dateString.includes('rd of')) {
      // Format like "27th of September 2025 at 09:05"
      const parts = dateString.split(' at ');
      const datePart = parts[0];
      const timePart = parts[1] || '00:00';
      
      // Convert "27th of September 2025" to "27 September 2025"
      const cleanDate = datePart.replace(/(\d+)(st|nd|rd|th) of /, '$1 ');
      activityDate = new Date(`${cleanDate} ${timePart}`);
    } else {
      // Try standard date parsing
      activityDate = new Date(dateString);
    }
    
    // console.log('Parsed activityDate:', activityDate);
    // console.log('Is valid date:', !isNaN(activityDate.getTime()));
    // console.log('=== END DATE PARSING DEBUG ===');
    
    if (isNaN(activityDate.getTime())) {
      // console.warn('Invalid date for activity:', activity, 'dateString:', dateString);
      return 'Invalid date';
    }
    
    const diffTime = Math.abs(now - activityDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    return `${diffDays - 1} days ago`;
  };

  // Get the 3 most recent activities for display - memoized for performance
  const recentActivities = useMemo(() => stravaActivities.slice(0, 3), [stravaActivities]);

  return (
    <>
      {/* Header Section */}
      <header className="header">
        <button 
          className="back-button" 
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: '2px solid #F25C05',
            color: '#F25C05',
            padding: '8px 16px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px',
            marginBottom: '20px',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#F25C05';
            e.target.style.color = 'white';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 8px rgba(242, 92, 5, 0.3)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#F25C05';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          ← Back to Portfolio
        </button>
        <h1 className="main-title">Ready & Raising</h1>
        <p className="description">
          The aim of this app is to allow people who have donated or are thinking of donating to see the training progress as well as the current fundraising total all in one place.
        </p>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        {/* Recent Activities Section */}
        <section className="activities-section">
          <h2 className="section-title">Recent Activities</h2>
          <div className="total-distance">
            <span className="distance-label">Total Distance:</span>
            <span className="distance-value">{formatDistance(totalDistance.total)} km</span>
            <span className="distance-breakdown">(Running: {formatDistance(totalDistance.running)} km • Cycling: {formatDistance(totalDistance.cycling)} km)</span>
          </div>
          <div className="section-content">
            {recentActivities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-icon">{getActivityIcon(activity.type)}</div>
                <div className="activity-text">
                  <p>{formatActivityTitle(activity)}</p>
                  <span className="activity-time">{getActivityTime(activity)}</span>
                </div>
              </div>
            ))}
            <div className="view-more">
              <Link to="recent-activities" className="view-more-button">
                View All Activities →
              </Link>
            </div>
          </div>
        </section>


      </main>

      {/* Footer Section */}
      <FundraisingFooter />
    </>
  );
});

export default LandingPage;
