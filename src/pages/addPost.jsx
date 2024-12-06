import { Button, Form } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { insertpost } from '../state/PostSlics';
import WithGuradrs from '../utl/WithGuradrs';
import { useFormik } from 'formik';
import postscheam from '../utl/schemaval';
const AddPost = ({props}) => {
const navigate=useNavigate();
const dispatch=useDispatch();
const {loading,error}=useSelector((state)=>state.posts)
const formik = useFormik({
  initialValues: {
  title:"",
  description:"",
  },
  validationSchema:{postscheam},
  onSubmit: values => {
    const id=Math.floor(Math.random()*500);
    dispatch(insertpost({id,title:values.title,description:values.description}))
    .unwrap()
    .then(()=>{
    navigate("/");
    })
    .catch((error)=>{
    console.log(error);
    });
  },
});
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlid="exampleform.controlinput">
        <Form.Label>title</Form.Label>
          <Form.Control
          type='text'
          name='title'
          onChange={formik.handleChange}
          value={formik.values.title}
          isInvalid={!!formik.errors.title}
          />
          <Form.Control.Feedback type='invalid'>
            {formik.errors.title}
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlid="exampleform.controlinput">
        <Form.Label>title</Form.Label>
          <Form.Control
          type='text'
          name='description'
          rows={3}
          onChange={formik.handleChange}
          value={formik.values.description}
          />
          </Form.Group>
          <Loading error={error} loading={loading}>
            <Button variant='primary' type='submit'>submit</Button>
          </Loading>
    </Form>
  )
}

export default WithGuradrs(AddPost)
