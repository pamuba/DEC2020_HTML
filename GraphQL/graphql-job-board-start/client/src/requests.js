import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { getAccessToken, isLoggedIn } from "./auth";
import gql from 'graphql-tag';

const endpointURL = 'http://localhost:9000/graphql'

const client = new ApolloClient({
   link: new HttpLink({uri:endpointURL}),
   cache: new InMemoryCache()
});


async function graphqlRequest(query, variables={}){
  const request = {
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({query,variables})
  };
  if(isLoggedIn()){
    request.headers['authorization'] = 'Bearer '+ getAccessToken();
  }
  const response = await fetch(endpointURL, request);
  const responseBody = await response.json();
  if(responseBody.errors){
    const messsages = responseBody.errors.map((err)=> err.message).join('\n');
    throw new Error(messsages)
  }
  return responseBody.data;
}

export async function createJob(input){
  const mutation = `
  mutation CreateJob($input: CreateJobInput){
    job: createJob(input:$input){
      id 
      title
  
       company{
          id 
          name
        }
     }
  }`;
  const {job} = await graphqlRequest(mutation, {input});
  return job;
}

export async function loadCompany(id){
  const query = `query CompanyQuery($id:ID!){
    company(id:$id){
      id
      name
      description
      jobs{
        id
        title
      }
    }
  }`;

  const {company} = await graphqlRequest(query, {id});
  return company;
}

export async function loadJob(id){
    
    const query = `query JobQuery($id:ID!){
      job(id:$id){
        id 
        title
        company{
          id
          name
        }
        description
      }
    }`;
    const {job} = await graphqlRequest(query, {id});
    return job;
}

export async function loadJobs(){
   const query = gql`
   {
    jobs{
      id 
      title
      company{
        id
        name
      }
    }
  }
   `;
   const {data:{jobs}} = await client.query({query});
   return jobs;
}