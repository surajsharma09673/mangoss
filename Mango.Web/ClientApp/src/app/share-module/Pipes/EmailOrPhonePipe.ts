import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'EmailOrPhonePipe'
})
export class EmailOrPhonePipe implements PipeTransform
{
    EmailorPhone:string="";
    private validationMap = new Map<string, () => boolean>([
        ['Email', () => this.isValidEmail()],
        ['Phone', () => this.isValidPhoneNumber()],
      ]);


      transform(value: string): string {
        this.EmailorPhone = value;
        if(value ==null || value =="")
        {
          return "required"
        }
        
        return this.transformWithErrorMsg(value)
    }

    // Return error messages based on validation result
    transformWithErrorMsg(value: string): string {
      this.EmailorPhone = value;

      for (const [label, validation] of this.validationMap.entries()) {
          if (validation()) {
              return label;
          } 
      }

      return 'Invalid Phone Or Email Address';
  }


    private isValidEmail(): boolean {
        // Implement email validation logic
        // For simplicity, checking for a basic email pattern
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(this.EmailorPhone);
      }
    
      private isValidPhoneNumber(): boolean {
        // Implement phone number validation logic
        // For simplicity, checking for a basic phone number pattern
        const phonePattern = /^\d{10}$/;
        return phonePattern.test(this.EmailorPhone);
      }
    
}



