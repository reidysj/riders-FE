import React, {useState} from 'react'
import {requestUser} from '../actions/usersActions'
import {connect} from 'react-redux'
import { Input, FormControl, FormLabel, Textarea, Button, RadioGroup, Radio } from "@chakra-ui/core";
import {useHistory} from 'react-router-dom'

const Form = props => {
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        comments: "",
        type: 'cvr'
      });
    
      const history = useHistory()

      const handleChange = e => {
          setForm({...form, [e.target.name]: e.target.value})
      } 
    
      const handleSubmit = e =>{
          e.preventDefault()
          props.requestUser(form)
          history.push('/contacted')

      }
    
      return (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="first_name" isRequired>First Name</FormLabel>
            <Input
              type="text"
              name="first_name"
              value={form.first_name}
              placeholder="First Name"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="last_name" isRequired>Last Name</FormLabel>
            <Input
              type="text"
              name="last_name"
              value={form.last_name}
              placeholder="Last Name"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email" isRequired>Email Address</FormLabel>
            <Input
              type="email"
              name="email"
              value={form.email}
              placeholder="Email"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="phone">Phone Number</FormLabel>
            <Input
              type="phone"
              name="phone"
              value={form.phone}
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="comments">
              Questions, Comments, or Concerns
            </FormLabel>
            <Textarea
              name="comments"
              value={form.comments}
              placeholder="Your questions or comments here."
              onChange={handleChange}
            />
          </FormControl>
          <FormControl as='fieldset'>
              <FormLabel as='legend'>What Type of Member are You?</FormLabel>
              <RadioGroup defaultValue='cvr' name='type' onChange={handleChange}>
                  <Radio value='cvr'>I am a Cherry Valley Rider</Radio>
                  <Radio value='or'>I am a Rider at another chapter</Radio>
                  <Radio value='rl'>I am a member of the Cherry Valley Legion interested in joining the Riders</Radio>
                  <Radio value='no'>None of the above</Radio>
              </RadioGroup>

          </FormControl>
          <Button type='submit'>Submit</Button>
        </form>
      )
}

const mStP = state => {
    return {
        isPosting: state.isPosting
    }
}

export default connect(
    mStP,
    {requestUser}
)(Form)