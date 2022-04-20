import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Chart from './components/Chart'
import Loader from './components/Loader/Loader'
import HeaderMain from './components/UI/HeaderMain/HeaderMain'

const Education = React.lazy(() => import('./components/Education/Education'))
const Experience = React.lazy(() =>
   import('./components/Experience/Experience')
)
const ContactPages = React.lazy(() => import('./pages/ContactPages'))
const FinishPages = React.lazy(() => import('./pages/FinishPages'))
const ExperienceTipsPages = React.lazy(() =>
   import('./pages/ExperienceTipsPages')
)
const EducationTipsPages = React.lazy(() =>
   import('./pages/EducationTipsPages')
)
const MainPages = React.lazy(() => import('./pages/MainPages'))
const SkillsPages = React.lazy(() => import('./pages/SkillsPages'))
const SkillTipsPages = React.lazy(() => import('./pages/SkillTipsPages'))

function App() {
   return (
      <Suspense fallback={<Loader />}>
         <HeaderMain />
         <Chart />
         <Routes>
            <Route path="/main" element={<MainPages />} />
            <Route path="*" element={<Navigate to="/main" replace />} />
            <Route path="/contact" element={<ContactPages />} />
            <Route path="/experience-tips" element={<ExperienceTipsPages />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education-tips" element={<EducationTipsPages />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skill-tips" element={<SkillTipsPages />} />
            <Route path="/skills" element={<SkillsPages />} />
            <Route path="/finish-project" element={<FinishPages />} />
         </Routes>
      </Suspense>
   )
}

export default App
