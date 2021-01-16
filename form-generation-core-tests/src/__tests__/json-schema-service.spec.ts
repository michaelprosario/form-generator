import { FormConfig, InputElement, JsonSchemaService } from "form-generation-core";
import { MakeFormCommand } from "form-generation-core/dist/core/services/json-schema-service";

function getSimpleSchema() {
  const schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
      {
        "id": "userStoryId",
        "name": "login",
        "shortDescription": "As a user, I should be able to log into the website",
        "acceptanceCriteria": "thing 1, thing2, thing 3",
        "complexity": 3,
        "priority": 5
      }
    ],
    "required": [
      "id",
      "name",
      "shortDescription",
      "acceptanceCriteria",
      "complexity",
      "priority"
    ],
    "properties": {
      "id": {
        "$id": "#/properties/id",
        "type": "string",
        "title": "The id schema",
        "description": "An explanation about the purpose of this instance.",
        "default": "",
        "examples": [
          "userStoryId"
        ]
      },
      "name": {
        "$id": "#/properties/name",
        "type": "string",
        "title": "The name schema",
        "description": "An explanation about the purpose of this instance.",
        "default": "",
        "examples": [
          "login"
        ]
      },
      "shortDescription": {
        "$id": "#/properties/shortDescription",
        "type": "string",
        "title": "The shortDescription schema",
        "description": "An explanation about the purpose of this instance.",
        "default": "",
        "examples": [
          "As a user, I should be able to log into the website"
        ]
      },
      "acceptanceCriteria": {
        "$id": "#/properties/acceptanceCriteria",
        "type": "string",
        "title": "The acceptanceCriteria schema",
        "description": "An explanation about the purpose of this instance.",
        "default": "",
        "examples": [
          "thing 1, thing2, thing 3"
        ]
      },
      "complexity": {
        "$id": "#/properties/complexity",
        "type": "integer",
        "title": "The complexity schema",
        "description": "An explanation about the purpose of this instance.",
        "default": 0,
        "examples": [
          3
        ]
      },
      "priority": {
        "$id": "#/properties/priority",
        "type": "integer",
        "title": "The priority schema",
        "description": "An explanation about the purpose of this instance.",
        "default": 0,
        "examples": [
          5
        ]
      }
    },
    "additionalProperties": true
  }

  return schema;
}


describe('Json Schema service', () => {

  it('should handle simple schema input', () => {
    // arrange
    let schema = getSimpleSchema();
    let service = new JsonSchemaService();
    let command = new MakeFormCommand(schema);

    // act 
    const response = service.makeForm(command);

    // assert   
    expect(response.formConfig.formElements.length).toBe(6);
  })

  it('should handle simple schema input', () => {
    // arrange
    let schema = getSimpleSchema();
    let service = new JsonSchemaService();
    let command = new MakeFormCommand(schema);

    // act 
    const response = service.makeForm(command);

    // assert   
    expect(response.formConfig.formElements.length).toBe(6);
  })

});