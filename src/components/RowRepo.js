import React from "react";
import './rowRepo.css'


function RowRepo({
    title,
    description,
    avatarUrl,
    nbStars,
    nbIssues,
    timeInterval,
    ownerName,
    repoUrl
}) {
  return (
    <div className="row-repo">
      <img className="row-repo__img" alt="avatar" src={avatarUrl} />
      <div className="row-repo__text">
        <div className="text-container">
          <div className="text-container__top">
            <a className="repoTitle" href={repoUrl}>
              {title}
            </a>
            <p>{description}</p>
          </div>

          <div className="text-container__bottom">
            <div>
              <svg
                aria-label="star"
                height="16"
                className="octicon octicon-star"
                viewBox="0 0 14 16"
                version="1.1"
                width="14"
                role="img"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                />
              </svg>{" "}
              {nbStars}
            </div>
            <div>
              <svg
                aria-label="issue-opened"
                height="16"
                className="octicon octicon-issue-opened"
                viewBox="0 0 14 16"
                version="1.1"
                width="14"
                role="img"
              >
                <path
                  fill-rule="evenodd"
                  d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
                />
              </svg>{" "}
              {nbIssues}
            </div>
            <div>
              Submitted {timeInterval} day ago by{" "}
              <span className="ownerName">{ownerName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowRepo;
