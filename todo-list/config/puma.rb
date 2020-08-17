# Remove
port        ENV.fetch("PORT") { 8080 }
environment ENV.fetch("RAILS_ENV") { "development" }
# Add
if ENV.fetch('RAILS_ENV') { 'development' } == 'development'
  # using mkcert self-signed cert enable ssl
  ssl_bind '0.0.0.0', ENV.fetch('PORT') { 8080 }, cert: 'config/ssl/localhost.pem', key: 'config/ssl/localhost-key.pem'
else
  port        ENV.fetch('PORT') { 8080 }
  environment ENV.fetch('RAILS_ENV') { 'development' }
end