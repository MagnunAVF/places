interface CreateResourceDto {
  type: string
  url: string
}

interface CreatePlaceDto {
  name: string
  description: string
  resources: CreateResourceDto[]
}

export default CreatePlaceDto
