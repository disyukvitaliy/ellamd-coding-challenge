FROM starefossen/ruby-node
ADD ./backend /backend
ADD ./frontend /frontend
WORKDIR /frontend
RUN npm install
RUN npm run build
COPY /frontend/build /backend/public
WORKDIR /backend
RUN bundle install -j32 --without development test
CMD puma