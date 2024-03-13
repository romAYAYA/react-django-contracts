import TextField from '@mui/material/TextField'
import ComboBox from './ComboBox.tsx'
import { Box, Button } from '@mui/material'
import { FormEventHandler, useState } from 'react'
import axios from 'axios'

interface IForm {
  comment: string
  total: number
  contract: string
  file_path: File | null
  date: string
}


const ContractForm = () => {
  const [form, setForm] = useState<IForm>({
      comment: '',
      total: 0,
      contract: 'privet',
      file_path: null,
      date: '12-12-2002'
    }
  )

  const postData = (event: any) => {
    event.preventDefault()


    const res = axios.post('http://127.0.0.1:8000/api/post/contract/', {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )


  }


  return (
    <>
      <form onSubmit={ postData } encType="multipartFormData">
        <Box sx={ { display: 'flex', flexDirection: 'column', gap: '5px', width: '200px' } }>
          <ComboBox />
          <Button
            variant="contained"
            component="label"
          >
            Upload Avatar
            <input type="file" accept="image/*" hidden
            />
          </Button>
          <TextField onChange={ (event) => setForm({ ...form, comment: event.target.value }) } label="Comment"
                     variant="standard"/>
          <TextField onChange={ (event) => setForm({ ...form, total: parseFloat(event.target.value) }) } label="Total"
                     type="number"
                     variant="standard"
          />
          <Button type="submit">Submit</Button>
        </Box>

      </form>
    </>
  )
}

export default ContractForm










