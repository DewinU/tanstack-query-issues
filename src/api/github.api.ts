import axios from 'axios';
import { Octokit } from 'octokit';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

export const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});
