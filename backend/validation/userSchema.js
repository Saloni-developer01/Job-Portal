
import * as yup from 'yup';

export const signupSchema = yup.object().shape({
    fullname: yup
        .string()
        .required('Full Name is required.'),
    email: yup
        .string()
        .email('Must be a valid email.')
        .required('Email is required.'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.') // Optional: Aur strong password rules
        .required('Password is required.'),
});