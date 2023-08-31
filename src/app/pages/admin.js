import { useState } from 'react'

// import auth from 'firebase-config'
// import { getDatabase, ref, set } from 'firebase/database'

import LoginForm from '@/components/LoginForm'
import AddProject from '@/components/AddProject'
import EditProjects from '@/components/EditProjects'

function AdminPage() {
  const [logIn, setLogIn] = useState(false)
  const [message, setMessage] = useState('')

  function loginHandler() {
    setLogIn(true)
  }

  async function addProjectHandler(project) {
    const response = await fetch(
      'https://projects-cec6a-default-rtdb.europe-west1.firebasedatabase.app/project.json',
      {
        method: 'POST',
        body: JSON.stringify(project),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      setMessage('Successfully added project to database!')
    } else {
      console.log('Error:', response.statusText)
      setMessage('Unable to add project to database')
    }
  }

  return (
    <>
      {!logIn && <LoginForm onLogin={loginHandler} />}
      {logIn && (
        <>
          <AddProject onAddProject={addProjectHandler} message={message} />
          <EditProjects />
        </>
      )}
    </>
  )
}

export default AdminPage
