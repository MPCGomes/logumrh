import React from 'react'
import Input from '@/components/Input/Input'
import Link from 'next/link'
import styles from './page.module.scss'
import ButtonPrimary from '@/components/ButtonPrimary/ButtonPrimary'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <section className={styles.login}>
        <div className={styles.loginContainer}>
          <div className={styles.leftSide}>
            <p>Bem-vindo de volta!</p>
            <Image
              src="./login.svg"
              alt=""
              height={300}
              width={300}
            />
          </div>
          <div className={styles.rightSide}>
            <h3>Entrar</h3>
            <div className={styles.inputContainer}>
              <Input
                label={'E-Mail'}
                placeholder={'Digite seu e-mail'}
                type={'text'}
              />
              <Input
                label={'Senha'}
                placeholder={'Digite sua senha'}
                type={'password'}
              />
              <Link
                className={styles.link}
                href={''}
              >
                Esqueceu a senha?
              </Link>
              <ButtonPrimary
                text={'Entrar'}
              />
            </div>
            <div className={styles.orLine}>
              <hr />
              <p>OU</p>
            </div>
            <p>Não tem uma conta? <Link
                className={styles.link}
                href={''}
              >
                Criar conta
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page