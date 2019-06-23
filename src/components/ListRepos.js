import React, { Component } from 'react'
import RowRepo from './RowRepo';

class ListRepos extends Component {

    

    render() {
        const repos = [
            {
                title:"Title repo 1",
                description:"description dzuhzhd repo 1 test test",
                avatarUrl: "https://picsum.photos/300/300", 
                nbStars:300,
                nbIssues:4,
                timeInterval:5,
                ownerName:"owner 1",
                repoUrl:"https://picsum.photos/"
            },
            {
                title:"Title repo 2",
                description:"description dzuhzhd repo 2 test test",
                avatarUrl: "https://picsum.photos/200/300", 
                nbStars:100,
                nbIssues:7,
                timeInterval:20,
                ownerName:"owner 2",
                repoUrl:"https://picsum.photos/"

            },
            {
                title:"Title repo 3",
                description:"description dzuhzhd repo 3 test test",
                avatarUrl: "https://picsum.photos/300/200", 
                nbStars:200,
                nbIssues:3,
                timeInterval:10,
                ownerName:"owner 3",
                repoUrl:"https://picsum.photos/"

            }
        ]
        return (
            <div className="listRepos-container">
                {repos.map((repo, index) => (
            <RowRepo
              key={index}
              title={repo.title}
              description={repo.description}
              avatarUrl={repo.avatarUrl}
              nbStars={repo.nbStars}
              nbIssues={repo.nbIssues}
              timeInterval={repo.timeInterval}
              ownerName={repo.ownerName}
              repoUrl={repo.repoUrl}
            />
          ))}
            </div>
        )
    }
}

export default ListRepos
