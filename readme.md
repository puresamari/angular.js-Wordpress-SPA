# Wordpress SPA with angular.js 

This is a [*Wordpress*][wp] Theme based on [*angular.js*][ng] and [*V2 Wp-Api*][wp-api]

### Setup
---

##### Requirements
 + Node.js
 + NPM

##### Dependencies

 + angular - v1.5.0
 + angular-animate: - v1.5.0
 + angular-aria: - v1.5.0
 + angular-material: - v1.0.6
 + angular-messages: - v1.5.0
 + angular-ui-router: - v0.2.17
 
##### Steps
1. Download and Install [Wordpress][wp]
2. Download and Install [Wp-Api][wp-api] (Tested on version ***2.0-beta12***)
3. Clone this Repo into the Themes Directory ('wordpress/wp-content/themes/')
4. Run: 

    ```npm
    # if gulp is not alredy installed:
        $ npm install gulp -g
    # endif? :D
    
    $ npm install
    $ gulp
    ```
5. Finished! The Theme should now be rendered in `dist/`

---

### Gulp

Here is a list of the gulp commands

```
$ gulp sass 
# generates the css-file from src/scss/style.scss

$ gulp resources 
# Copies everything from src/resources/ to dist/ (for images etc.)

$ gulp vendor 
# Copies and concatenates the needed dependencies from node_modules/

$ gulp js
# Concatenates the js-files in src/app/

$ gulp core
# Copies the files from src/php/

$ gulp views
# Copies the files from src/views/

$ gulp templates
# Copies the files from src/templates/

$ gulp dist
# Runs every command from above

$ gulp watch
# Watches for changes src/**/* and runs the depending Task

$ gulp
# Runs dist and starts the watch-task
```

# Feel free to use to a full extend and have fun with it :D
If you use the Theme i would like to be linked but you don't have to 

[![forthebadge](http://forthebadge.com/images/badges/powered-by-netflix.svg)](http://forthebadge.com)

  [ng]: https://angularjs.org/ "angular.js"
  [wp-api]: http://v2.wp-api.org/ "Wp Api version 2"
  [wp]: https://wordpress.org/download/ "Wordpress"
