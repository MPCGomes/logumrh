import React from 'react';
import ProfileField from '@/components/ProfileField/ProfileField';
import styles from './page.module.scss';
import ProfileNav from '@/components/ProfileNav/ProfileNav';


const Profile: React.FC = () => {
  return (
    <section className="container paddingSection">
      <div className={styles.sections}>
        <ProfileNav
          profileClass={'active'}
          cvClass={'inactive'}
        />
        <div className={styles.section}>
          <h2>
            Informações Básicas
          </h2>
          <div>
            <ProfileField label="Nome" value="Maria Júlia" />
            <ProfileField label="Nome Social" value="Julhão" />
            <ProfileField label="Data de Nascimento" value="30 de setembro de 1999" />
            <ProfileField label="CPF" value="000.000.000-00" />
            <ProfileField label="Gênero" value="Fêmea" />
          </div>
        </div>
        <div className={styles.section}>
          <h2>
            Informações Adicionais
          </h2>
          <div>
            <ProfileField label="Etnia" value="Branca" />
            <ProfileField label="Estado Civil" value="Solteirona" />
            <ProfileField label="Deficiência" value="Nenhuma" />
            <ProfileField label="Escolaridade" value="Superior" />
          </div>
        </div>
        <div className={styles.section}>
          <h2>
            Contato & Segurança
          </h2>
          <div>
            <ProfileField label="Telefone" value="(00) 0 0000-0000" />
            <ProfileField label="E-mail" value="julhao@email.com" />
            <ProfileField label="Senha" value="********" />
          </div>
        </div>
        <div className={styles.section}>
          <h2>
            Endereço
          </h2>
          <div>
            <ProfileField label="País" value="Brasil" />
            <ProfileField label="CEP" value="00000-000" />
            <ProfileField label="Estado" value="São Paulo" />
            <ProfileField label="Cidade" value="Jacaré" />
            <ProfileField label="Bairro" value="Formigas de Galocha" />
            <ProfileField label="Rua/Avenida" value="Rua Flaminguitios" />
            <ProfileField label="Complemento" value="Nenhum" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
