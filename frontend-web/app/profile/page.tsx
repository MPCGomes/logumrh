import React from 'react';
import ProfileSection from '@/components/ProfileSection/ProfileSection';
import styles from './page.module.scss';
import ProfilePicture from '@/components/ProfilePicture/ProfilePicture';
import ProfileNav from '@/components/ProfileNav/ProfileNav';

interface Field {
  label: string;
  value: string;
}

interface Section {
  title: string;
  fields: Field[];
}

const profileData: Section[] = [
  {
    title: 'Informações Básicas',
    fields: [
      {
        label: 'Nome',
        value: 'Maria Júlia'
      },
      {
        label: 'Nome Social',
        value: 'Nenhum'
      },
      {
        label: 'Data de Nascimento',
        value: '30 de setembro 1999'
      },
      {
        label: 'CPF',
        value: '000.000.000-00'
      },
      {
        label: 'Gênero',
        value: 'Feminino'
      }
    ],
  },
  {
    title: 'Informações Adicionais',
    fields: [
      {
        label: 'Etnia',
        value: 'Branca'
      },
      {
        label: 'Estado Civil',
        value: 'Solteira'
      },
      {
        label: 'Deficiência',
        value: 'Nenhuma'
      },
      {
        label: 'Escolaridade',
        value: 'Graduação - Em Andamento'
      }
    ],
  },
  {
    title: 'Contato & Segurança',
    fields: [
      {
        label: 'Telefone',
        value: '+00 (00) 0 0000-0000'
      },
      {
        label: 'E-mail',
        value: 'mariajulia@email.com'
      },
      {
        label: 'Senha',
        value: '********'
      }
    ],
  },
  {
    title: 'Endereço',
    fields: [
      {
        label: 'País',
        value: 'Brasil'
      },
      {
        label: 'CEP',
        value: '123456-789'
      },
      {
        label: 'Estado',
        value: 'Estado'
      },
      {
        label: 'Cidade',
        value: 'Cidade'
      },
      {
        label: 'Bairro',
        value: 'Bairro'
      },
      {
        label: 'Rua/Avenida',
        value: 'Rua/Avenida'
      },
      {
        label: 'Número',
        value: '000'
      },
      {
        label: 'Complemento',
        value: 'Complemento'
      }
    ],
  }
]

const Profile: React.FC = () => (
  <div className="container">
    <ProfilePicture name={"Maria Júlia"} />
    <div className={styles.sections}>
      {profileData.map((section, index) => (
        <ProfileSection
          key={index}
          title={section.title}
          fields={section.fields}
        />
      ))}
=======
const Profile: React.FC = () => {
  return (
    <div className="container paddingSection">
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
    </div>
  </div>
);

export default Profile;
