'use client';

import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Button,
  TextField,
  MenuItem,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
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

const steps = [
  'Contato e Segurança',
  'Informações Básicas',
  'Informações Adicionais',
  'Endereço'
];

type DropdownFieldKeys =
  | 'Nacionalidade'
  | 'Gênero'
  | 'Escolaridade'
  | 'Escolaridade (Status)'
  | 'Etnia'
  | 'Estado Civil'
  | 'Deficiência'
  | 'País';

const dropdownOptions: Record<DropdownFieldKeys, string[]> = {
  Nacionalidade: ['Brasileiro(a)', 'Outro(a)'],
  Gênero: ['Masculino', 'Feminino', 'Não-Binário', 'Outro'],
  Escolaridade: [
    'Fundamental I',
    'Fundamental II',
    'Médio',
    'Técnico',
    'Tecnólogo',
    'Bacharelado',
    'Pós-Graduação',
    'Mestrado',
    'Doutorado',
  ],
  'Escolaridade (Status)': ['Em andamento', 'Completo', 'Incompleto'],
  Etnia: ['Prefiro Não Informar', 'Branco', 'Preto', 'Pardo', 'Amarelo', 'Indígena'],
  'Estado Civil': [
    'Prefiro Não Informar',
    'Solteiro(a)',
    'Casado(a)',
    'Viúvo(a)',
    'Divorciado(a)',
    'Separado(a)',
  ],
  Deficiência: ['Nenhuma', 'Visual', 'Auditiva', 'Física', 'Intelectual', 'Múltipla'],
  País: ['Brasil'],
};

interface FormValues {
  Telefone: string;
  'E-mail': string;
  'Confirmação de E-mail': string;
  Senha: string;
  'Confirmação de Senha': string;
  Nome: string;
  'Nome Social': string;
  'Data de Nascimento': string;
  CPF: string;
  Nacionalidade: string;
  Etnia?: string;
  'Estado Civil'?: string;
  Deficiência?: string;
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

const stepFields: (keyof FormValues)[][] = [
  ['Telefone', 'E-mail', 'Confirmação de E-mail', 'Senha', 'Confirmação de Senha'],
  ['Nome', 'Nome Social', 'Data de Nascimento', 'CPF', 'Gênero'],
  ['Nacionalidade', 'Etnia', 'Estado Civil', 'Deficiência', 'Escolaridade', 'Escolaridade (Status)'],
  ['País', 'CEP', 'Estado', 'Cidade', 'Bairro', 'Rua/Avenida', 'Número', 'Complemento'],
];

const validationSchema = [
  Yup.object({
    Telefone: Yup.string()
      .matches(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, 'Número de telefone inválido')
      .required('Obrigatório'),
    'E-mail': Yup.string().email('Email inválido').required('Obrigatório'),
    'Confirmação de E-mail': Yup.string()
      .oneOf([Yup.ref('E-mail')], 'Emails não coincidem')
      .required('Obrigatório'),
    Senha: Yup.string()
      .required('Obrigatório')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
        'Senha deve conter ao menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos'
      ),
    'Confirmação de Senha': Yup.string()
      .oneOf([Yup.ref('Senha')], 'Senhas não coincidem')
      .required('Obrigatório'),
  }),
  Yup.object({
    Nome: Yup.string().required('Obrigatório'),
    'Nome Social': Yup.string(),
    'Data de Nascimento': Yup.string()
      .matches(/^\d{2}\/\d{2}\/\d{4}$/, 'Formato inválido (DD/MM/YYYY)')
      .required('Obrigatório'),
    CPF: Yup.string()
      .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Formato inválido (XXX.XXX.XXX-XX)')
      .required('Obrigatório'),
    Gênero: Yup.string().required('Obrigatório'),
  }),
  Yup.object({
    Nacionalidade: Yup.string().required('Obrigatório'),
    Etnia: Yup.string(),
    'Estado Civil': Yup.string(),
    Deficiência: Yup.string(),
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      Telefone: '',
      'E-mail': '',
      'Confirmação de E-mail': '',
      Senha: '',
      'Confirmação de Senha': '',
      Nome: '',
      'Nome Social': '',
      'Data de Nascimento': '',
      CPF: '',
      Nacionalidade: '',
      Etnia: '',
      'Estado Civil': '',
      Deficiência: '',
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
      formik.setFieldValue('Estado', data.uf || '');
      formik.setFieldValue('Cidade', data.localidade || '');
      formik.setFieldValue('Bairro', data.bairro || '');
      formik.setFieldValue('Rua/Avenida', data.logradouro || '');
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
    }
  };

  const formatDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const parts = [
      cleaned.slice(0, 2),
      cleaned.slice(2, 4),
      cleaned.slice(4, 8),
    ];
    return parts.filter(Boolean).join('/');
  };

  const formatCPF = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    let formatted = cleaned;
    if (cleaned.length > 3) {
      formatted = `${cleaned.slice(0, 3)}.${cleaned.slice(3)}`;
    }
    if (cleaned.length > 6) {
      formatted = `${formatted.slice(0, 7)}.${cleaned.slice(6)}`;
    }
    if (cleaned.length > 9) {
      formatted = `${formatted.slice(0, 11)}-${cleaned.slice(9, 11)}`;
    }
    return formatted;
  };

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const truncated = cleaned.slice(0, 11);
    let formatted = truncated;
    if (truncated.length > 2) {
      formatted = `(${truncated.slice(0, 2)}) ${truncated.slice(2)}`;
    }
    if (truncated.length > 7) {
      formatted = `${formatted.slice(0, 10)}-${truncated.slice(7)}`;
    }
    return formatted;
  };

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
              {stepFields[activeStep].map((field) => {
                const fieldName = field as keyof FormValues;

                let value = formik.values[fieldName] || '';

                if (field === 'Data de Nascimento') {
                  value = formatDate(value);
                } else if (field === 'CPF') {
                  value = formatCPF(value);
                } else if (field === 'Telefone') {
                  value = formatPhone(value);
                }

                let type = 'text';
                let InputProps: Partial<React.ComponentProps<typeof TextField>['InputProps']> = {};

                if (field === 'Senha') {
                  type = showPassword ? 'text' : 'password';
                  InputProps.endAdornment = (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((show) => !show)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  );
                } else if (field === 'Confirmação de Senha') {
                  type = showConfirmPassword ? 'text' : 'password';
                  InputProps.endAdornment = (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowConfirmPassword((show) => !show)}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  );
                }

                if (['Estado', 'Cidade', 'Bairro', 'Rua/Avenida'].includes(field)) {
                  InputProps.readOnly = true;
                }

                return (
                  <TextField
                    key={field}
                    fullWidth
                    label={field}
                    name={field}
                    type={type}
                    value={value}
                    select={(dropdownOptions as Record<string, string[]>)[field] !== undefined}
                    InputProps={InputProps}
                    onChange={(e) => {
                      let newValue = e.target.value;
                      if (field === 'Data de Nascimento') {
                        newValue = formatDate(newValue);
                      } else if (field === 'CPF') {
                        newValue = formatCPF(newValue);
                      } else if (field === 'Telefone') {
                        newValue = formatPhone(newValue);
                      }
                      formik.setFieldValue(fieldName, newValue);
                      if (field === 'CEP') fetchAddress(newValue);
                    }}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched[fieldName] && Boolean(formik.errors[fieldName])
                    }
                    helperText={formik.touched[fieldName] && formik.errors[fieldName]}
                    margin="normal"
                  >
                    {(dropdownOptions as Record<string, string[]>)[field]?.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                );
              })}
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Button disabled={activeStep === 0} onClick={() => setActiveStep((prev) => prev - 1)}>
                Voltar
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  if (activeStep === steps.length - 1) {
                    formik.submitForm();
                  } else {
                    setActiveStep((prevStep) => prevStep + 1);
                  }
                }}
                href={activeStep === steps.length - 1 ? '/' : undefined}
              >
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
