import Loading from '../components/Loading';
import usePostDetails from '../hooks/use-post-detail';
import { Button, Form } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editPost } from '../state/PostSlics';
import { useNavigate } from 'react-router-dom';
import WithGuradrs from '../utl/WithGuradrs';
import { useFormik } from 'formik';
import postscheam from '../utl/schemaval';
const EditPost = () => {
const dispatch=useDispatch();
const navigate=useNavigate();
  const {loading:dataloading,error:dataerror,record}=usePostDetails();
  useEffect(()=>{
  return(
    dispatch({type:"posts/cleanrecord"})
  );
  },[dispatch])
  const formik = useFormik({
    initialValues: {
    title:record?record?.title:"",
    description:record?record?.description:"",
    },
    enableReinitialize:true,
    validationSchema:{postscheam},
    onSubmit: values => {
      dispatch(editPost({id:record.id,title:values.title,description:values.description}))
      .unwrap()
      .then(()=>{
      navigate("/");
    })
    },
  });
  return (
    <>
      <Loading loading={dataloading} error={dataerror}>
      <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlid="exampleform.controlinput">
        <Form.Label>title</Form.Label>
          <Form.Control
          type='text'
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
          rows={3}
          name='description'
          onChange={formik.handleChange}
          value={formik.values.description}
          />
          </Form.Group>
          {/* <Loading error={error} loading={loading}> */}
            <Button variant='primary' type='submit'>submit</Button>
          {/* </Loading> */}
    </Form>
      </Loading>
    </>
  )
}

export default WithGuradrs(EditPost)
