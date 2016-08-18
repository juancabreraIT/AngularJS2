import { Component }    from '@angular/core';

import { Athlete }      from './athlete';

@Component({
    selector: 'athlete-form',
    templateUrl: 'app/sample_form/athlete-form.component.html'
})

export class AthleteFormComponent {

    disciplines = [ '100m / 200m', '400m', '800m / 1500m',
                    '3000m / 5000m / 10000m', 'Marathon',
                    'Hurdles', 'Steeplechase', 'Discus',
                    'Javelin', 'Shot Put', 'Hammer Throw',
                    'Pole Vault', 'Long Jump', 'High Jump',
                    'Triple Jump', 'Heptathlon', 'Decathlon',
                    'Race Walk', 'Relay'
                    ]

    model = new Athlete(18, 'Usain Bolt', this.disciplines[0], 1);

    submitted = false;

    onSubmit() { this.submitted = true; }
}