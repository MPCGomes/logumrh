import React from 'react'
import styles from './page.module.scss'
import AdminNav from '@/components/AdminNav/AdminNav'
import AdminCandidatesField from '@/components/AdminCandidatesField/AdminCandidatesField'
import AdminCandidate from '@/components/AdminCandidates/AdminCandidate'

const page = () => {
  return (
    <section className="container paddingSection">
      <div className={styles.sections}>
        <AdminNav
          profileClass={'inactive'}
          cvClass={'active'}
        />
        <div className={styles.section}>
          <AdminCandidatesField />
          <AdminCandidate
            name={'Nome'}
            email={'exemplo@email.com'}
            phone={'(00) 0000-0000'}
            date={'DD/MM/YYYY às 00:00 GMT'}
          />
          <AdminCandidate
            name={'Nome'}
            email={'exemplo@email.com'}
            phone={'(00) 0000-0000'}
            date={'DD/MM/YYYY às 00:00 GMT'}
          />
          <AdminCandidate
            name={'Nome'}
            email={'exemplo@email.com'}
            phone={'(00) 0000-0000'}
            date={'DD/MM/YYYY às 00:00 GMT'}
          />
          <AdminCandidate
            name={'Nome'}
            email={'exemplo@email.com'}
            phone={'(00) 0000-0000'}
            date={'DD/MM/YYYY às 00:00 GMT'}
          />
        </div>
      </div>
    </section>
  )
}

export default page