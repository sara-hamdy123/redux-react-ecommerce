import * as Yup from 'yup';
const postscheam = Yup.object().shape({
    title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('title is required'),
    description: Yup.string()
    .required('Required'),
});
export default postscheam;