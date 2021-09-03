# Learning Microfrontend with Webpack's Module Federation
This application was created in the course: [Microfrontends with React: A Complete Developer's Guide](https://www.udemy.com/course/microfrontend-course/).

The application has 4 microfrontends:
- Marketing (React);
- Auth (React);
- Dashboard (Vue);
- and the Container (React);

## What I've learned

* Concepts, challenges and application of Microfrontends
* Webpack's Module Federation
* CI/CD Pipeline for Microfrontends
* Deployment to AWS using S3 and Cloudfront

## Wanna try?

To run the server in development mode you will need npm or yarn installed in your computer.

1. Clone the repository
   ```sh
   git clone https://github.com/felipemmendes/learning-microfrontend.git
   ```
2. Go to repository directory and install NPM packages

   ```sh
   npm install
   ```

   or

   ```sh
   yarn
   ```

3. Start the server in development mode for each app

   ```sh
   cd packages/{DIRECTORY}
   ```
   Where {DIRECTORY} is the app you want to run. There, run:

   ```sh
   npm run start
   ```

   or

   ```sh
   yarn start
   ```

   Every app will run in a different port:
   Container: http://localhost:8081
   Marketing: http://localhost:8082
   Auth: http://localhost:8083
   Dashboard: http://localhost:8084

4. To deploy to AWS, you will need to setup an AWS S3 bucket and a Cloudfront directory. Then, create a new GutHub repo, set the following secrets:
- AWS_ACCESS_KEY_ID // AWS IAM profile access key
- AWS_DISTRIBUTION_ID  // AWS Cloudfront Distribution ID
- AWS_S3_BUCKET_NAME // AWS S3 bucket name
- AWS_SECRET_ACCESS_KEY  // AWS IAM profile secret access key
- PRODUCTION_DOMAIN // AWS Cloudfront domain

Then, push to your new GitHub repo. Deploy actions will only run when there are changes to each app individually.
