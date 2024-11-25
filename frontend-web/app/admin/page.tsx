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
          <AdminVacancyField link={'adminCompany'} />
          <AdminCompanyField
            name={'Tech Solutions'}
            cnpj={'51.178.438/0001-11'}
            responsible={'João Gabriel'}
            email={'joel@gmail.com'}
            phone={'(11) 99622-0511'}
          />

          <AdminCompanyField
            name={'Construtora Alpha'}
            cnpj={'34.795.735/0001-22'}
            responsible={'Marianna Gonçalves'}
            email={'mary@hotmail.com'}
            phone={'(21) 99123-4567'}
          />

          <AdminCompanyField
            name={'Agência Criativa'}
            cnpj={'89.765.453/0001-33'}
            responsible={'Carlos Santos'}
            email={'carlos.santos@gmail.com'}
            phone={'(11) 94002-8922'}
          />

          <AdminCompanyField
            name={'Logística Express'}
            cnpj={'12.657.334/0001-44'}
            responsible={'Ana Lima'}
            email={'ana.lima@hotmail.com'}
            phone={'(41) 99876-1234'}
          />

          <AdminCompanyField
            name={'Consultoria Prime'}
            cnpj={'78.234.739/0001-55'}
            responsible={'Paulo Souza'}
            email={'paulo.souza@gmail.com'}
            phone={'(51) 99823-9876'}
          />
        </div>
      </div>
    </section>
  )
}

export default page