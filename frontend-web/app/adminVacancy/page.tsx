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
            href={'adminVacancies'}
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
              label={'Código'}
              value={'00000'}
            />
            <ProfileField
              label={'Modalidade'}
              value={'Modalidade'}
            />
            <ProfileField
              label={'Tipo de Contrato'}
              value={'Tipo'}
            />
            <ProfileField
              label={'Descrição'}
              value={'Descrição'}
            />
            <ProfileField
              label={'Escala'}
              value={'0x0'}
            />
            <ProfileField
              label={'Requerimentos'}
              value={'(00) 0000-0000'}
            />
            <ProfileField
              label={'Benefícios'}
              value={'Benefícios'}
            />
            <ProfileField
              label={'Endereço'}
              value={'Endereço'}
            />
            <ProfileField
              label={'Observações'}
              value={'Observações'}
            />
            <ProfileField
              label={'Tags'}
              value={'Tags'}
            />
            <ProfileField
              label={'Salário'}
              value={'R$ 0.000,00'}
            />
            <ProfileField
              label={'Encerramento'}
              value={'DD/MM/YYYY às 00:00 GMT'}
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