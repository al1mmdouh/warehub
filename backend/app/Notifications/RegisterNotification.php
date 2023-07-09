<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class RegisterNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    // ->mailer('smtp')
                    // ->subject('Mail Message')
                    // ->greeting('hello'.$notifiable->name)
                    // ->line('The introduction to the notification.')
                    // ->action('Notification Action', url('/'))

                    // ->line('Thank you for using our application!')

                  
                    ->subject('Welcome to Warehub')
                    ->greeting('Hello ' . $notifiable->name . '!')
                    ->line('Thank you for registering on Warehub.')
                    ->line('Feel free to explore and enjoy our Warehub website.')
                    ->action('Visit YourWebsite', url('/'))
                    ->line('If you have any questions, feel free to contact us.')
                    ;
    }
     
    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
    public function toDataBase($notifiable)
    {
        return [
            //
        ];
    }
}

