# Entities
## User
Bhakt
### Attributes
- email (255, String, non null, numberic-only starting with non-zero digit)
- full_name (255, String, non null, alphabets only)
- password_hash (255, String, non null)
### Relationship
- None
## PoojaVidhi
Actual step that needs to be performed by a bhakt(`User`)
### Attributes
- title (255, String, non null)
- description (10000, String, non null)
### Relationship
- 1 `PoojaVidhi` to many `Pooja`
## Pooja
Collection of order `PoojaVidhi`
### Attributes
- title (255, String, non null)
- description (10000, String, non null)
### Relationship
- 1 `Pooja` to many `PoojaVidhi`

# Overall Relationship
`Pooja` many to many `PoojaVidhi`