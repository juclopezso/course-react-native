import { useForm } from '../hooks/useForm'

export const Forms = () => {

  const {form, onChange} = useForm({
    email: 'test@1234.com',
    password: '123456'
  })

  return (
    <>
      <h3>Forms</h3>
      <input 
        type="text"
        className="form-control" 
        value={form.email}
        // onChange={ (e) => onChange(e.target.value, 'email')}
        // same as
        onChange={ ({target}) => onChange(target.value, 'email')}
      />
      <input 
        type="text"
        className="form-control mt-3 mb-3" 
        value={form.password}
        onChange={ ({target}) => onChange(target.value, 'password')}
      />

      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  )
}
