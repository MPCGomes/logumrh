import React from 'react'
import styles from './page.module.scss'
import AdminNav from '@/components/AdminNav/AdminNav'
import AdminVacancyField from '@/components/AdminVacancyField/AdminVacancyField'
import AdminCompanyVacancy from '@/components/AdminCompanyVacancy/AdminCompanyVacancy'

const page = () => {
  return (
    <section className="container paddingSection">
      <div className={styles.sections}>
        <AdminNav
          profileClass={'inactive'}
          cvClass={'active'}
        />
        <div className={styles.section}>
          <AdminVacancyField link={'adminVacancy'} />
          <AdminCompanyVacancy
            name={'Nome da Vaga'}
            cnpj={'00.000.000/000-00'}
            responsible={'Nome'}
            email={'exemplo@email.com'}
            phone={'(00) 0000-0000'}
          />
          <AdminCompanyVacancy
            name={'Nome da Vaga'}
            cnpj={'00.000.000/000-00'}
            responsible={'Nome'}
            email={'exemplo@email.com'}
            phone={'(00) 0000-0000'}
          />
          <AdminCompanyVacancy
            name={'Nome da Vaga'}
            cnpj={'00.000.000/000-00'}
            responsible={'Nome'}
            email={'exemplo@email.com'}
            phone={'(00) 0000-0000'}
          />
          <AdminCompanyVacancy
            name={'Nome da Vaga'}
            cnpj={'00.000.000/000-00'}
            responsible={'Nome'}
            email={'exemplo@email.com'}
            phone={'(00) 0000-0000'}
          />
          <AdminCompanyVacancy
            name={'Nome da Vaga'}
            cnpj={'00.000.000/000-00'}
            responsible={'Nome'}
            email={'exemplo@email.com'}
            phone={'(00) 0000-0000'}
          />
        </div>
      </div>
    </section>
  )
}

export default page