import React, { Suspense } from 'react';

// Loading fallback component
const LoadingFallback = ({ componentName = 'Component' }) => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading {componentName}...</span>
    </div>
  </div>
);

// Lazy load heavy components with proper Suspense wrapping
export const LazyProjects = (props) => {
  const Projects = React.lazy(() => import('./Projects/Projects'));
  return (
    <Suspense fallback={<LoadingFallback componentName="Projects" />}>
      <Projects {...props} />
    </Suspense>
  );
};

export const LazySkills = (props) => {
  const Skills = React.lazy(() => import('./Skills/Skills'));
  return (
    <Suspense fallback={<LoadingFallback componentName="Skills" />}>
      <Skills {...props} />
    </Suspense>
  );
};

export const LazyOther = (props) => {
  const Other = React.lazy(() => import('./Other/Other'));
  return (
    <Suspense fallback={<LoadingFallback componentName="Other" />}>
      <Other {...props} />
    </Suspense>
  );
};

export const LazyResume = (props) => {
  const Resume = React.lazy(() => import('./Resume/ResumeNew'));
  return (
    <Suspense fallback={<LoadingFallback componentName="Resume" />}>
      <Resume {...props} />
    </Suspense>
  );
};
