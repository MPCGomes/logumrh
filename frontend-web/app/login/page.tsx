import React from 'react'
import TextInput from '@/components/TextInput/TextInput'
import Link from 'next/link'
import styles from './page.module.scss'
import ButtonPrimary from '@/components/ButtonPrimary/ButtonPrimary'
import Image from 'next/image'
import PasswordInput from '@/components/PasswordInput/PasswordInput'

const page = () => {
  return (
    <div>
      <section className={styles.login}>
        <div className={styles.loginContainer}>
          <div className={styles.leftSide}>
            <p>Bem-vindo de volta!</p>
            <Image
              src="/login.png"
              alt=""
              height={210}
              width={300}
            />
          </div>
          <div className={styles.rightSide}>
            <h3>Entrar</h3>
            <div className={styles.inputContainer}>
              <TextInput
                label={'E-mail'}
              />
              <PasswordInput
                label={'Senha'}
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
              <hr/>
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