import { Fragment } from "react";
import Link from 'next/link';
import moment from 'moment';
import ResourceLabel from './ResourceLabel';

function ResourceHighlight({ resources }) {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
        {
            resources.map(resource => {
              return (
                <section key={resource.id} className="section">
                  <div className="columns">
                    <div className="column is-8 is-offset-2">
                      <div className="content is-medium">
                        <h2 className="subtitle is-4">
                          {moment(resource.createdAt).format("LLL")}
                          <ResourceLabel status={resource.status}/>
                        </h2>
                        <h1 className="title">{resource.title}</h1>
                        <p className="mb-2">{resource.description}</p>
                        <Link href={`/resources/${resource.id}`} legacyBehavior>
                          <span className="button is-light">
                            Details
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}

export default ResourceHighlight;
