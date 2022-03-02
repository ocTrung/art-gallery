# TODO Features
- make a card for each result
  - clickable
  - figure out what details you want, maybe 3 details
- Route to page when card is clicked, display more details
  - decide what further details we want
- move api requests from useeffect to clickevent

# Issues
- dont allow user to submit empty search
- reset view when user navigates to a new page
- show more images per row on larger screens

-----------------------------------------------------------------------------

# log
- pagination took some extra work because the API provided by the Met is somewhat limited. Met API endpoint for search returns only IDs from artwork that match the query. Separate requests are needed to get information about each ID.

# done
- perform search when user presses 'enter' on keyboard -> convert search to use forms
- make requests for each id
- pagination

## features
- pagination
- latest React Hooks
- useContext for state management
