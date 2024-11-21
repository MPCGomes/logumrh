import React from 'react';
import ProfileSection from '@/components/ProfileSection/ProfileSection';
import styles from './page.module.scss';

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
        value: ''
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
    title: 'Informações Básicas',
    fields: [
      {
        label: 'Texto',
        value: 'Texto'
      }
    ],
  },
  {
    title: 'Informações Básicas',
    fields: [
      {
        label: 'Texto',
        value: 'Texto'
      }
    ],
  }
]

const Profile: React.FC = () => (
  <div className="container paddingSection">
    <div className={styles.sections}>
      {profileData.map((section, index) => (
        <ProfileSection key={index} title={section.title} fields={section.fields} />
      ))}
    </div>
  </div>
);

export default Profile;
