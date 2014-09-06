Jquery-Validate-Form
====================

*Include lib

<script type="text/javascript" src="jquey.js"></script>
<script type="text/javascript" src="jquey.validate.js"></script>
<script type="text/javascript" src="jquery.lms.validate.js"></script>

*Create Form width attribute 'validate'

Cakephp : 
  echo $this->Form->create('', array('method' => 'POST', 'validate' => 'true'));

output HTML : 
  <form action="" method="post" validate="true" >

*Define rules for input

Cakephp :
  echo $this->Form->input('name', array(
      'type' => 'text',
      'label' => __('Name'),
      'rules' => json_encode(array(
          array(
            'required' => true,
            'message' => "This field is required"
          ),
          array(
            'minlength' => 3,
            'message' => 'Name is more than 3 character'
          )
      ))
  ));
  
HTML output:
<input name="data[name]" rules="[{"required":true,"message":"This field is required"},{"minlength":3,"message":"Name is more than 3 character"}]" type="text"/>

Simple rule:

'rules' => json_encode(array(
    'required' => true,
    'message' => "This field is required"
  ))

*Reference:
http://jqueryvalidation.org/

