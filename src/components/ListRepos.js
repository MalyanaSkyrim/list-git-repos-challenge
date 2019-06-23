import React, { Component } from 'react'
import RowRepo from './RowRepo';
import axios from 'axios'

class ListRepos extends Component {
    state = {
        repos: []
    }
    
    
    componentDidMount(){
        this.loadRepos();
    }   
     
    loadRepos = async () => {
        axios.defaults.baseURL = 'https://api.github.com';
        const res = await axios.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc');
        
        console.log(res);
        const repos = res.data.items
                .map(repo => ({
                    title:repo.name,
                    description:repo.description,
                    avatarUrl:repo.owner.avatar_url,
                    nbStars: repo.stargazers_count,
                    nbIssues:repo.open_issues_count,
                    timeInterval:repo.timeInterval,
                    ownerName:repo.owner.login,
                    repoUrl:repo.repoUrl
                }));

        this.setState({repos});

    }


    render() {
        const {repos} = this.state;

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
