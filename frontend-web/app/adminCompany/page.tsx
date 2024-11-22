import React from 'react'
import styles from './page.module.scss'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa6";
import ProfileField from '@/components/ProfileField/ProfileField';

const page = () => {
  return (
    <section className="container paddingSection">
      <div className={styles.sections}>
        <div className={styles.section}>
          <Link
            className={styles.goBack}
            href={'admin'}
          >
            <FaArrowLeft />
            <p>Voltar</p>
          </Link>
          <div>
            <ProfileField
              label={'Nome'}
              value={'Nome'}
            />
            <ProfileField
              label={'Nome Social'}
              value={'Nome Social'}
            />
            <ProfileField
              label={'CNPJ'}
              value={'00.000.000/0000-00'}
            />
            <ProfileField
              label={'Setor'}
              value={'Setor'}
            />
            <ProfileField
              label={'Responsável'}
              value={'Responsável'}
            />
            <ProfileField
              label={'E-mail'}
              value={'exemplo@email.com'}
            />
            <ProfileField
              label={'Telefone'}
              value={'(00) 0000-0000'}
            />
            <ProfileField
              label={'Status'}
              value={'Status'}
            />
            <ProfileField
              label={'Criado por'}
              value={'Nome'}
            />
            <ProfileField
              label={'Criado em'}
              value={'DD/MM/YYYY às 00:00 GMT'}
            />
            <ProfileField
              label={'Atualizado por'}
              value={'Nome'}
            />
            <ProfileField
              label={'Atualizado em'}
              value={'DD/MM/YYYY às 00:00 GMT'}
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default page