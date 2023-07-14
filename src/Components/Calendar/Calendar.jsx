import GitHubCalendar from 'react-github-calendar';
import '../../Pages/style.css'

function Calendar(){
    return (
        <div className='calendar'>
        <GitHubCalendar 
                        username="bpodlins" 
                        blockMargin={6}
                        blockRadius={3}
                        blockSize={24}
                        fontSize={18}
                    />
        </div>
    )
}

export default Calendar