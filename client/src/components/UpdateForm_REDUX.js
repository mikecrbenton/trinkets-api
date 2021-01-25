import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

// REDUX
import { connect } from 'react-redux'
import { updateById } from '../Redux/actions'

const editedItem = {
  name: "",
  price: "",
  imageUrl: "",
  description: "",
  shipping: ""
};

const UpdateForm_REDUX = (props) => {
  
  console.log("PROPS IN REDUX UPDATE FORM: ", props.updateById)

  const { push } = useHistory();
  // LOCAL STATE FOR EDIT-FORM
  const [item, setItem] = useState(editedItem);
  const { id } = useParams();

  // GET ITEM BY ID TO DISPLAY------------------
  useEffect(() => {
    axios.get(`http://localhost:3333/itemById/${id}`)
      .then((res) => {
        // res.data
        setItem(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);


  const changeHandler = (ev) => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === "price") {
      value = parseInt(value, 10);
    }

    setItem({
      ...item,
      [ev.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateById(id, item)
    push(`/item-list/${id}`);
  };


  return (
    <div>
      <h2>REDUX Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          placeholder="name"
          value={item.name}
        />
        <div className="baseline" />

        <input
          type="number"
          name="price"
          onChange={changeHandler}
          placeholder="Price"
          value={item.price}
        />
        <div className="baseline" />

        <input
          type="string"
          name="imageUrl"
          onChange={changeHandler}
          placeholder="Image"
          value={item.imageUrl}
        />
        <div className="baseline" />

        <input
          type="string"
          name="description"
          onChange={changeHandler}
          placeholder="Description"
          value={item.description}
        />
        <div className="baseline" />

        <input
          type="string"
          name="shipping"
          onChange={changeHandler}
          placeholder="Shipping"
          value={item.shipping}
        />
        <div className="baseline" />

        <button className="md-button form-button">Update</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
   return {
      redux_items : state
   }
}

export default connect(mapStateToProps, {updateById})(UpdateForm_REDUX);
