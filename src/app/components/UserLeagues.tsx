import './../../App.css';
import { FC, useEffect, useState} from 'react';
import { getUserTeams } from 'services/leagues/leaguesService';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';

const UserLeagues:FC = () => {
    const authentication = useSelector((state: RootState) => {
        return state.authentication
      })

    const userId = authentication.user._id;
    const [ userTeams, setUserTeams ] = useState<any[]>([])

    useEffect(() => {
        const getTeamsByUser = async (userId: string) => {
          try {
            const response: any = await getUserTeams(userId);
            if (response.status === 200) {
                setUserTeams(response.data.payload);
            }
          } catch (error) {
            console.log(error);
          }
        }
        getTeamsByUser(userId);
      }, [userId])

    return (
        <div>
            <>
            <h2>My Leagues</h2>
            {userTeams.map((team) => {
                return (
                    <div>
                        {team.name}{team.league.name}
                    </div>
                )
            })}
            </>
        </div>
    )
}

export default UserLeagues