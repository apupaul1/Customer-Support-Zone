import { Suspense, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar/Navbar';
import TicketsContainer from './components/TicketsContainer/TicketsContainer';
import CardStatus from './components/CardStatus/CardStatus';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';


const ticketsPromise = fetch('/tickets.json').then(res => res.json())


function App() {

  const [progressCount, setProgressCount] = useState(0)
  const [taskName, setTaskName] = useState([])
  const [resolved, setResolved] = useState([])
  const [allTask, setAllTask] = useState([])



  const handleRemove = (id) => {
    const remainingTask = taskName.filter(task => task.id !== id)
    setTaskName(remainingTask)
    toast.success(`Successfully Resolved Ticket Number #${id}`)

    const taskList = allTask.filter(tsk => tsk.id !== id)
    setAllTask(taskList)
  }

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='bg-base-200'>
        <div className="flex flex-col lg:flex-row w-11/12 mx-auto py-16 gap-8">
          <div className="relative bg-linear-to-br from-[#632EE3] to-[#9F62F2] 
            lg:h-50 h-40 lg:flex-1 rounded-lg text-white flex flex-col justify-center items-center">
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/vector1.png"
                alt="pattern"
                className="absolute top-0 left-0 w-1/2 h-full object-cover"
              />
              <img
                src="/vector1.png"
                alt="pattern"
                className="absolute top-0 right-0 w-1/2 h-full object-cover scale-x-[-1]"
              />
            </div>
            <h1 className="text-xl my-4">In Progress</h1>
            <p className="text-4xl font-semibold">{progressCount}</p>
          </div>

          <div className="relative bg-linear-to-l from-[#54CF68] to-[#00827A] lg:h-50 h-40 lg:flex-1 rounded-lg text-white flex flex-col justify-center items-center">
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/vector1.png"
                alt="pattern"
                className="absolute top-0 left-0 w-1/2 h-full object-cover"
              />
              <img
                src="/vector1.png"
                alt="pattern"
                className="absolute top-0 right-0 w-1/2 h-full object-cover scale-x-[-1]"
              />
            </div>
            <h1 className="text-xl my-4">Resolved</h1>
            <p className="text-4xl font-semibold">{resolved.length}</p>
          </div>
        </div>

        <section className='flex w-11/12 mx-auto gap-4 flex-col lg:flex-row pb-12'>
          <Suspense fallback={<Loading></Loading>}>
            <TicketsContainer
              setProgressCount={setProgressCount}
              progressCount={progressCount}
              ticketsPromise={ticketsPromise}
              taskName={taskName}
              setTaskName={setTaskName}
              allTask={allTask}
              setAllTask={setAllTask}
            ></TicketsContainer>
          </Suspense>
          <CardStatus
            taskName={taskName}
            resolved={resolved}
            setResolved={setResolved}
            handleRemove={handleRemove}
            setProgressCount={setProgressCount}
            progressCount={progressCount}
          ></CardStatus>
        </section>
      </main>

      <footer>
        <Footer></Footer>
      </footer>

      <ToastContainer />
    </>
  )
}

export default App
