import React from 'react'
import styles from './page.module.scss'
import AdminNav from '@/components/AdminNav/AdminNav'
import AdminVacancyField from '@/components/AdminVacancyField/AdminVacancyField'
import AdminCompanyField from '@/components/AdminCompanyField/AdminCompanyField'

const page = () => {
  return (
    <section className="container paddingSection">
      <div className={styles.sections}>
        <AdminNav
          profileClass={'active'}
          cvClass={'inactive'}
        />
        <div className={styles.section}>
          <AdminVacancyField />
          <AdminCompanyField
            name={'Empresa'}
            cnpj={'00.000.000/000-00'}
            responsible={'Nome'}
            email={'exemplo@email.com'}
            phone={'(00) 0000-0000'}
          />
          <AdminCompanyField
            name={'Empresa'}
            cnpj={'00.000.000/000-00'}
            responsible={'Nome'}
            email={'exemplo@email.com'}
            phone={'(00) 0000-0000'}
          />
          <AdminCompanyField
            name={'Empresa'}
            cnpj={'00.000.000/000-00'}
            responsible={'Nome'}
            email={'exemplo@email.com'}
            phone={'(00) 0000-0000'}
          />
          <AdminCompanyField
            name={'Empresa'}
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