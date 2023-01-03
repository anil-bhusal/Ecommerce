import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

const itemSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  brand: Yup.string().required('Required'),
  itemType: Yup.string().required('Required'),
  price: Yup.string().required('Required'),
  size: Yup.string().required('Required'),
  quantity: Yup.string().required('Required'),
});

const AddItem = () => {
  const navigate = useNavigate()
  const { name } = useSelector(state => state.user)

  const orderItem = async (values) => {
    values.senderName = name
    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    };

    const response = await fetch('http://localhost:4000/items', requestOptions);
    const data = await response.json()

    if (data) {
      alert(data.msg)
      navigate('/')
    }
  }

  return (
    <div className='App'>
      <Formik
        initialValues={{
          name: '',
          brand: '',
          itemType: '',
          price: '',
          size: '',
          quantity: '',
        }}
        validationSchema={itemSchema}
        onSubmit={(values, { resetForm }) => {
          orderItem(values)
        }}
      >
        {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
          <div className='auth'>
            <Form onSubmit={handleSubmit}>
              <h1>Add Items</h1>

              <Field name="name" type="text" placeholder="item name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
              {errors.name && touched.name ? (<div className="error">{errors.name}</div>) : null}

              <Field name="brand" type="text" placeholder="brand name" value={values.brand} onChange={handleChange} onBlur={handleBlur} />
              {errors.brand && touched.brand ? (<div className="error">{errors.brand}</div>) : null}

              <select name="itemType" type="text" value={values.itemType} onChange={handleChange} onBlur={handleBlur}>
                <option value="" disabled="disabled" label="Product Type"></option>
                <option value="clothing" label="Clothing">Clothing</option>
                <option value="jewelleries" label="Jewelleries">Jewelleries</option>
                <option value="stationary" label="Stationary">Stationary</option>
                <option value="electronics" label="Electronics">Electronics</option>
                <option value="furniture" label="Furniture">Furniture</option>
                <option value="other" label="Other">Other</option>
              </select>
              {errors.itemType && touched.itemType ? (<div className="error">{errors.itemType}</div>) : null}

              <Field name="price" type="number" placeholder="item price" value={values.price} onChange={handleChange} onBlur={handleBlur} />
              {errors.price && touched.price ? (<div className="error">{errors.price}</div>) : null}

              <Field name="size" type="number" placeholder="item size" value={values.size} onChange={handleChange} onBlur={handleBlur} />
              {errors.size && touched.size ? (<div className="error">{errors.size}</div>) : null}

              <Field name="quantity" type="number" placeholder="item quantity" value={values.quantity} onChange={handleChange} onBlur={handleBlur} />
              {errors.quantity && touched.quantity ? (<div className="error">{errors.quantity}</div>) : null}

              <button className='btn btn-success' type="submit">Add Item</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}
export default AddItem;