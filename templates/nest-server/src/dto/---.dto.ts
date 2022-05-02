import { {{#each classValidatorList}} {{this}}, {{/each}} } from 'class-validator';
{{#each importRequestDto}}import { {{this}} } from './data/{{this}}.data'; {{/each}}

export class {{className}} {
    
{{#each variableList}} 
    /**
     * @description {{this.variableDescription}}
     */        
    {{this.variableClassValidator}}
    {{this.variable}}{{#if this.varibaleExample}} = {{#typeCheck this.varibaleExample }} {{this}} {{/typeCheck}} {{/if}}
    
{{/each}}
}