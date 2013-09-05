//Models for testing out Backbone Factory

var User = Backbone.Model.extend({

  name: null,
  email: null

});

var UserWithSchema = Backbone.Model.extend({

  name: null,
  email: null,

  schema: {
    name: {
      type: 'string',
      default: 'Backbone User'
    },
    email: {
      type: 'string',
      default: ''
    }
  }

});

var Post = Backbone.Model.extend({

  defaults: {
    title: 'Default Title'
  }

});


var Comment = Backbone.Model.extend({

  schema: {
    msg: {
      type: 'string',
      default: 'Default comment msg'
    }
  }

});


var Comments = Backbone.Collection.extend({

  model: Comment

});


var PostWithSchema = Backbone.Model.extend({

  defaults: {
    title: 'Default Title'
  },

  schema: {
    title: {
      type: 'string',
      default: 'Default value from schema'
    },
    body: {
      type: 'string',
      default: 'Default body'
    },
    author: {
      type: 'related',
      related_to: UserWithSchema
    },
    author_without_schema: {
      type: 'related',
      related_to: User
    },
    comments: {
      type: 'related',
      related_to: Comments
    }
  }

});
