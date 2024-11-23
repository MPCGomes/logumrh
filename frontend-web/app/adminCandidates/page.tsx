import React from 'react'
import styles from './page.module.scss'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa6";
import ProfileField from '@/components/ProfileField/ProfileField';
import AdminCandidatesField from '@/components/AdminCandidatesField/AdminCandidatesField';
import AdminCandidate from '@/components/AdminCandidates/AdminCandidate';

const page = () => {
  return (
    <section className="container paddingSection">
      <div className={styles.sections}>
        <div className={styles.section}>
          <Link
            className={styles.goBack}
            href={'adminVacancies'}
          >
            <FaArrowLeft />
            <p>Voltar</p>
          </Link>
          <div>
            <AdminCandidatesField />
            <AdminCandidate
              name={'Nome'}
              email={'exemplo@email.com'}
              phone={'(00) 0000-0000'}
              date={'DD/MM/YYYY'}
            />
            <AdminCandidate
              name={'Nome'}
              email={'exemplo@email.com'}
              phone={'(00) 0000-0000'}
              date={'DD/MM/YYYY'}
            />
            <AdminCandidate
              name={'Nome'}
              email={'exemplo@email.com'}
              phone={'(00) 0000-0000'}
              date={'DD/MM/YYYY'}
            />
            <AdminCandidate
              name={'Nome'}
              email={'exemplo@email.com'}
              phone={'(00) 0000-0000'}
              date={'DD/MM/YYYY'}
            />
            <AdminCandidate
              name={'Nome'}
              email={'exemplo@email.com'}
              phone={'(00) 0000-0000'}
              date={'DD/MM/YYYY'}
            />

          </div>
        </div>

      </div>
    </section>
  )
}

export default page