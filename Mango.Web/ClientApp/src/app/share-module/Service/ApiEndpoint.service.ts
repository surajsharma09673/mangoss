import { Inject, Injectable, InjectionToken } from '@angular/core';

export const ENDPOINT_INSTANCES = new InjectionToken('ENDPOINT_INSTANCES');

@Injectable()
export class ApiEndpointService {
  
 endpoints: UrlEndpoint;

 constructor(@Inject(ENDPOINT_INSTANCES) private _endpoints:any) {
  this.endpoints = this.mergeEndpoints(_endpoints);
}

ngOnInit() {
  console.log('Merged Endpoint:', this.endpoints);
}

private mergeEndpoints(endpoints:any): any {
  return endpoints.reduce((merged:any, current:any) => {
    return { ...merged, ...current };
  }, {} );
}
}
