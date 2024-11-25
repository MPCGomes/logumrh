'use client';

import React, { useState } from "react";
import { Stepper, Step, StepLabel, StepConnector, Button, TextField, MenuItem, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import styles from './page.module.scss';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  '& .MuiStepConnector-line': {
    borderColor: theme.palette.primary.main,
    borderTopWidth: 2,
  },
}));

const ColorlibStepIcon: React.FC<{ active: boolean }> = ({ active }) => (
  <div
    style={{
      backgroundColor: active ? '#7e053a' : '#ccc',
      color: '#fff',
      borderRadius: '50%',
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {active ? '✓' : ''}
  </div>
);

interface FormValues {
  Telefone: string;
  'E-mail': string;
  'Confirmação de E-mail': string;
  Senha: string;
  'Confirmação de Senha': string;
  Nome: string;
  'Data de Nascimento': string;
  Nacionalidade: string;
  Gênero: string;
  Escolaridade: string;
  'Escolaridade (Status)': string;
  País: string;
  CEP: string;
  Estado: string;
  Cidade: string;
  Bairro: string;
  'Rua/Avenida': string;
  Número: string;
  Complemento: string;
}

const steps = [
  'Contato e Segurança',
  'Informações Básicas',
  'Informações Adicionais',
  'Endereço'
];

const stepFields: (keyof FormValues)[][] = [
  ['Telefone', 'E-mail', 'Confirmação de E-mail', 'Senha', 'Confirmação de Senha'],
  ['Nome', 'Data de Nascimento', 'Nacionalidade', 'Gênero'],
  ['Nacionalidade', 'Escolaridade', 'Escolaridade (Status)'],
  ['País', 'CEP', 'Estado', 'Cidade', 'Bairro', 'Rua/Avenida', 'Número', 'Complemento'],
];

const validationSchema = [
  Yup.object({
    Telefone: Yup.string().required('Obrigatório'),
    'E-mail': Yup.string().email('Email inválido').required('Obrigatório'),
    'Confirmação de E-mail': Yup.string()
      .oneOf([Yup.ref('E-mail')], 'Emails não coincidem')
      .required('Obrigatório'),
    Senha: Yup.string().required('Obrigatório'),
    'Confirmação de Senha': Yup.string()
      .oneOf([Yup.ref('Senha')], 'Senhas não coincidem')
      .required('Obrigatório'),
  }),
  Yup.object({
    Nome: Yup.string().required('Obrigatório'),
    'Data de Nascimento': Yup.date().required('Obrigatório'),
    Nacionalidade: Yup.string().required('Obrigatório'),
    Gênero: Yup.string().required('Obrigatório'),
  }),
  Yup.object({
    Nacionalidade: Yup.string().required('Obrigatório'),
    Escolaridade: Yup.string().required('Obrigatório'),
    'Escolaridade (Status)': Yup.string().required('Obrigatório'),
  }),
  Yup.object({
    País: Yup.string().required('Obrigatório'),
    CEP: Yup.string().required('Obrigatório'),
    Estado: Yup.string().required('Obrigatório'),
    Cidade: Yup.string().required('Obrigatório'),
    Bairro: Yup.string().required('Obrigatório'),
    'Rua/Avenida': Yup.string().required('Obrigatório'),
    Número: Yup.string().required('Obrigatório'),
    Complemento: Yup.string(),
  }),
];

const Page: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const formik = useFormik({
    initialValues: {
      Telefone: '',
      'E-mail': '',
      'Confirmação de E-mail': '',
      Senha: '',
      'Confirmação de Senha': '',
      Nome: '',
      'Data de Nascimento': '',
      Nacionalidade: '',
      Gênero: '',
      Escolaridade: '',
      'Escolaridade (Status)': '',
      País: 'Brasil',
      CEP: '',
      Estado: '',
      Cidade: '',
      Bairro: '',
      'Rua/Avenida': '',
      Número: '',
      Complemento: '',
    },
    validationSchema: validationSchema[activeStep],
    onSubmit: (values) => {
      if (activeStep === steps.length - 1) {
        console.log('Final Data:', values);
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    },
  });

  const fetchAddress = async (cep: string) => {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      formik.setValues({
        ...formik.values,
        Estado: data.uf || '',
        Cidade: data.localidade || '',
        Bairro: data.bairro || '',
        'Rua/Avenida': data.logradouro || '',
      });
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
    }
  };

  const handleNext = async () => {
    await formik.validateForm();
    if (Object.keys(formik.errors).length === 0) {
      formik.submitForm();
    }
  };

  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  return (
    <div className="container paddingSection">
      <div className={styles.container}>
        <h1>Cadastro</h1>
        <Box sx={{ maxWidth: 600, margin: '0 auto', mt: 4 }}>
          <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={() => <ColorlibStepIcon active={activeStep === steps.indexOf(label)} />}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ mt: 4 }}>
              {stepFields[activeStep].map((field) => (
                <TextField
                  key={field}
                  fullWidth
                  label={field}
                  name={field}
                  value={formik.values[field]}
                  onChange={(e) => {
                    formik.handleChange(e);
                    if (field === 'CEP') fetchAddress(e.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  error={formik.touched[field] && Boolean(formik.errors[field])}
                  helperText={formik.touched[field] && formik.errors[field]}
                  margin="normal"
                />
              ))}
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Voltar
              </Button>
              <Button variant="contained" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
              </Button>
            </Box>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default Page;