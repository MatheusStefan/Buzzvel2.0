export default function (plop) {
	// create your generators here
	plop.setGenerator('component', {
		description: 'Create a new component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component name:'
    }],
    actions: [
      {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/component/component.tsx.hbs',
      },
  ],
	});
};