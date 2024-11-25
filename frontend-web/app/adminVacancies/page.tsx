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
            name={'Analista de Marketing'}
            cnpj={'11.222.333/0001-44'}
            responsible={'João Silva'}
            email={'joao.silva@gmail.com'}
            phone={'(11) 9876-5432'}
          />
          <AdminCompanyVacancy
            name={'Engenheiro de Software'}
            cnpj={'22.333.444/0001-55'}
            responsible={'Ana Oliveira'}
            email={'ana.oliveira@hotmail.com'}
            phone={'(21) 9123-4567'}
          />
          <AdminCompanyVacancy
            name={'Especialista em Logística'}
            cnpj={'44.555.666/0001-77'}
            responsible={'Maria Souza'}
            email={'maria.souza@hotmail.com'}
            phone={'(41) 9876-1234'}
          />
          <AdminCompanyVacancy
            name={'Engenheiro Civil'}
            cnpj={'33.444.555/0001-66'}
            responsible={'Carlos Santos'}
            email={'carlos.santos@gmail.com'}
            phone={'(31) 9987-6543'}
          />
          <AdminCompanyVacancy
            name={'Gerente de Projetos'}
            cnpj={'55.666.777/0001-88'}
            responsible={'Paula Lima'}
            email={'paula.lima@gmail.com'}
            phone={'(51) 9123-9876'}
          />
        </div>
      </div>
    </section>
  )
}

export default page